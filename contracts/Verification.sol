pragma solidity ^0.7.3;

contract Verification{
    bool passportNumberVerified;
    bool photoVerified;
    bool nameVerified;

    uint8 passportNumberApprovals;
    uint8 passportNumberRejections;
    uint8 photoApprovals;
    uint8 photoRejections;
    uint8 nameApprovals;
    uint8 nameRejections;

    function isVerified() public returns (bool)
    {
        if((passportNumberApprovals - passportNumberRejections) == 10){
            passportNumberVerified = true;
        }
        else{
            passportNumberVerified = false;
        }

        if((photoApprovals - photoRejections) == 10){
            photoVerified = true;
        }
        else{
            photoVerified = false;
        }

        if((nameApprovals - nameVerified) == 10){
            nameVerified = true;
        }
        else{
            nameVerified = false;
        }

        if(passportNumberVerified && photoVerified && nameVerified){
            return true;
        }
        else{
            return false;
        }
    }

    function reset() public returns(bool){
        uint8 passportNumberApprovals = 0;
        uint8 passportNumberRejections = 0;
        uint8 photoApprovals = 0;
        uint8 photoRejections = 0;
        uint8 nameApprovals = 0;
        uint8 nameRejections = 0;
    }

    function incPassportNumberVerified(bool memory _passportNumberVerified) public {
        passportNumberVerified = _passportNumberVerified;
        if(passportNumberVerified){
            passportNumberApprovals++;
        }
        else{
            passportNumberRejections++;
        }
    }

    function incPictureVerified(bool memory _photoVerified) public {
        photoVerified = _pictureVerified;
        if(photoVerified){
            photoApprovals++;
        }
        else{
            photoRejections++;
        }
    }

    function incNameVerified(bool memory _nameVerified) public {
        nameVerified = _nameVerified;
        if(nameVerified){
            nameApprovals++;
        }
        else{
            nameRejections++;
        }
    }

} 