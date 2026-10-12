# Infinity Sale Ledger

This module advances the museum registry from edition creation to recorded ownership transfers.

## Settlement boundary

A card is not transferred merely because a buyer clicks a button. Settlement requires all of the following:

1. A pending sale intent identifying the exact numbered serial, seller, buyer, price, and currency.
2. Confirmation from a configured payment provider, including a unique provider reference.
3. Verification that the seller is the registry's current owner.
4. Verified seller authorization from the server-side session or equivalent trusted mechanism.
5. An unused sale ID and unused provider payment reference.

Only then is a permanent receipt created and the registry owner changed.

## Fee rule

Creation fee: **$0**  
Listing fee: **$0**  
Platform fee: deducted from the completed sale proceeds at the configured basis-point rate.

For example, a $100 sale at 500 basis points creates a $5 platform fee and $95 seller proceeds.

## Retry and double-spend behavior

Safe retries with the same sale, serial, and payment reference return the existing receipt. A reused sale ID with different data or a reused payment reference for another sale is rejected.

## Important boundary

The module records validated settlement rules but does not claim to process money, authenticate a real user, or publish to a blockchain. Those operations require a deployed server, configured payment provider, durable database transaction, and secure session or wallet-signature verification.
