# API

## Stats API

The stats API allows you to access your own data so you can analyse your trades/account stats in your preferred programming language and always have the most up-to-date data. (Instead of manually exporting them each time)
This is therefore just a "personal" API, but if you want to aggregate data for an entire clan or friend group, you can ask other players to share it through the "public link/token" system.

### A1: Where can I find more information about the STATS API or the structure of the exported data?
Swagger documentation: https://stats.alecaframe.com/api/swagger/index.html
If you have any other questions related to the API or the data export feature, you can always ask in ⁠developement-help 

### A2: Do I need some kind of API key or similar to use the API?
No, but rate limiting is enforced on an per-IP basis (1 rps, with a queue of 30)

### A3: What are the "token" and "userHash" parameters needed for the API?
The "userHash" is an anonymous identifier generated for each player. You can find yours in the "stats" tab of the app. Please DO NOT share this with other people, use public tokens instead if you want to share your data.
A public "link/token" can be generated from the stats tab of the app and can be used to publicly share your stats with other people. When a public token is generated, you can choose which data to share. They expire in 1 year and can be revoked sooner if necessary. 

### A4: What data is collected in the stats tab and how is it handled?
All data is stored in a totally anonymous way, fully compliant with the "anonymous" GDPR definition (GDPR art.26). Only you (the player) knows your "userHash" and therefore only you can access your data.
You can also fully disable the stats tab in the settings menu if you prefer that.

### A5: I changed my Warframe username and I lost my stats history. Is there anything I can do to get it back?
Unfortunately no, as a side effect of the data being totally anonymous, there is no way to find your old data unless you saved a copy of your old "userHash" somewhere.

### A6: How can I delete all my data?
Please send me a DM mentioning this and your "userHash" (Check how to obtain it in FAQ A3) 


## Relic inventory API

The relic inventory API provides an up-to-date list of the relics a user owns.

### Authorization
To access the data you will need a "public token" with 'relic' access from the user authorizing you to access their relic inventory.

A user can get a public token by going into the "Stats" tab of AlecaFrame, "Create Public Link", making sure "relics" is selected and then "Generate token".

### Documentation
Swagger documentation: https://stats.alecaframe.com/api/swagger/index.html

The response follows this format:
``` txt
	// Data format. Everything in little endian unless specified otherwise
	// Uint32 - Number of relics
	// For each relic (9 bytes):
	// Uint8 - Relic type: 0 - Lith, 1 - Meso, 2 - Neo, 3 - Axi, 4 - Requiem
	// Uint8 - Relic refinement: 0 - Intact, 1 - Exceptional, 2 - Flawless, 3 - Radiant, 4 - Exceptional, 5 - Flawless, 6 - Radiant
	// char[3] - Name (i.e. "L1", "B21", ...)
	// Uint32 - Number of relics of this type
```





