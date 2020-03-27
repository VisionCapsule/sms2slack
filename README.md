
# crypto-hackathon
1618 Cryptocurrencies &amp; Cryptowallets Hackathon

1.) Add your GitHub username and/or e-mail to the list below to get credit for your attendace.


Crypto Night 1
------------------
1. SalMac86

2. Crystal

3. DustyBest

-----------
The Challenge
We're building a Cryptocurrency, with a supporting blockchain and a digital wallet. This is a pretty ambitious goal, so let's unpack that a bit. We'll have to:

Create a server to manage our custom blockchain
Implement our new Cryptocurrency on our blockchain
Create a wallet that allows us to transfer our currency between parties
This all means we need at least 3 components to this project: 1) a custom blockchain, and 2) a custom Cryptocurrency and 3) a digital wallet.

The Challenge this week is to build a custom Cryptocurrency using the JavaScript blockchain that we made last session.
We're going to use the following definition of a Cryptocurrency for the purposes of this session - from Jan Lanksy's paper Possible State Approaches to Cryptocurrencies

(1) The system does not require a central authority, distributed achieve consensus on its state.
(2) The system keeps an overview of cryptocurrency units and their ownership.
(3) The system defines whether new cryptocurrency units can be created. If new cryptocurrency units can be created, the system defines the circumstances of their origin and how to determine the ownership of these new units.
(4) Ownership of cryptocurrency units can be proved exclusively cryptographically.
(5) The system allows transactions to be performed in which ownership of the cryptographic units is changed. A transaction statement can only be issued by an entity proving the current ownership of these units.
(6) If two different instructions for changing the ownership of the same cryptographic units are simultaneously entered, the system performs at most one of them.


To keep things simple, we'll continue to use Node.JS for our server. We'll use Cloud9 as the IDE (Integrated Development Environment) for the server, and host it on AWS. Each mob will share a Cloud9 / EC2 instance, and everydev is sponsoring it. 

For the digital wallet app, we recommend that each mob uses Visual Studio Code today, but your IDE of choice will do just fine.
