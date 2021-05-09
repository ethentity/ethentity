Ethentity is a dApp that allows users to have their identity and government ID verified by other, previously verified users. It's done in a way that protects the users' personal information by splitting this information into chunks that can individually be verified but are not individually significant.

# Stack

We're using the following technologies:
- Arbitrum for our L2 transactions.
- Kleros for the dispute arbitration.
- IPFS to securely store encrypted photos.

# Approach ([Wireframes](https://whimsical.com/mvp-webapp-TbuPwZS8A8ZJjR6a3ke4sf))

- A user verifies their identity by taking a photo of them holding their government ID (Passport) on app.ethentity.io and paying a verification fee.
- The user uses the Ethentity app to create three chunks, these are duplicates of the photo above each only showing a part of the passport #.
- Verifiers pick an ID chunk to verify. They can't verify more than one chunk of the same ID.
- A verifier, who is a verified user, is incentivized by a verification reward. This is the fee that the prover pays divided by the number of chunk verifiers.
- A verifier stakes their ETH to be able to verify ID chunks, they can be penalized if their verification was challenged and rejected.
- Once all three chunks of a given ID are verified, then that user's ID is considered to be verified.

![image](https://user-images.githubusercontent.com/7915931/117583393-e23aed00-b0d4-11eb-919c-b179a8f36e6b.png)




