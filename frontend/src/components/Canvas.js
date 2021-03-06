import React from 'react';
import {useRef, useState} from 'react';
import { Button, func } from "shards-react";
import ipfsApi from 'ipfs-api';
import Buffer from 'buffer';

let posX = 0;
let posY = 0;

function changePos(x, y){
    posX = x;
    posY = y;
}


function Canvas(props){

       const canvasRef = useRef(null);
       let [imgData, setImgData] = useState(null);

       function initCanvas(){
            let ctx = canvasRef.current.getContext("2d");
            const background = new Image();
            background.src = props.img;
            background.onload = function(){
            ctx.drawImage(background, 0, 0);
            }
        }
        
        
        function draw(e){

            const ctx = canvasRef.current.getContext("2d");
            ctx.beginPath(); // begin
          
            ctx.lineWidth = 25;
            ctx.lineCap = 'square';
            ctx.strokeStyle = '#111111';
            
            changePos(e.clientX - 165, e.clientY - 80)
        
            ctx.moveTo(posX, posY); // from
         
            ctx.lineTo(posX, posY); // to
          
            ctx.stroke(); // draw it!
        }


        function save(){
            const img = canvasRef.current.toDataURL("image/png");
            console.log(img);
            setImgData(img);
        }

        async function saveToIpfs(){
            const ipfs = ipfsApi('localhost', 5001)
            const buffer = ipfs.types.Buffer(imgData)
            ipfs.files.add(buffer, (err, result)=>{
                if(err){
                    console.log(err)
                    return
                }
                let url = `https://ipfs.io/ipfs/${result[0].hash}`
                console.log(`Url --> ${url}`)
            })
        }


        return(
            <div> 
                <canvas 
                ref={canvasRef} 
                width={640} 
                height={400}
                onMouseDown= {(e) => {
                    draw(e, canvasRef);
                } 
                }
                />
                <Button onClick={save}>Save Image</Button>
                <Button onClick={initCanvas}>Set Background Image</Button>
                <Button onClick={saveToIpfs}>Save to IFPS</Button>
            </div>
        )
}
export default Canvas;