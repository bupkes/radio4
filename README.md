# radio4
Returns today's schedule for BBC Radio 4

gets the json from http://www.bbc.co.uk/radio4/programmes/schedules/fm/today.json
and sets it out pretty cleanly

just runs on the command line for now.


here's a typical result:

00.00 - Midnight News

00.30 - Book of the Week

00.48 - Shipping Forecast

01.00 - Selection of BBC World Service Programmes

05.20 - Shipping Forecast

05.30 - News Briefing

05.43 - Prayer for the Day

05.45 - Farming Today

05.58 - Tweet of the Day

06.00 - Today

etc etc etc 


# BROKEN

As per [the BBC site](http://www.bbc.co.uk/radio4/programmes/schedules/fm/today.json)

## Maintenance mode

From April 18, 2017, the BBC is no longer able to offer XML, RDF and iCalendar (.ics) views of programme metadata from this location.

Work is underway in some areas of the BBC with a view to providing a durable successor to the decommissioned data views, and when the shape of this work is known, suitable communications will be put in place to direct the wider technology community towards that successor.

Until that time, it is possible to offer JSON views of many metadata aggregations from 'http://www.bbc.co.uk/programmes', but these views cannot, unfortunately, include those of TV channel and radio station schedules, or A-Z or genre and format listings for a channel or station.

The remaining JSON feeds will remain in operation until May 1, 2018.

To expend new development effort on maintaining the decommissioned views would significantly threaten the future existence of the BBC's responsive web offering for programme websites. This includes the responsive web views of schedules for all of the BBC’s broadcast services (listed at http://www.bbc.co.uk/programmes#services), which continue to be available.

Additionally - and this won't concern all users of data views, but may need some clarity - we would like to point out that no provision of metadata feeds from the BBC constitutes an implicit or explicit licence to download rights-controlled digital media content for indefinite retention by the downloader.

The Charter under which the BBC operates has, for many years, required it to commission a proportion of its content from commercial suppliers. Additionally, it engages independent performers and other contributors to certain programmes (including those produced by the BBC itself), according to commercial terms. All of the resulting agreements set limitations on the availability of the programmes online. It is not possible for the BBC to selectively ignore or to abrogate these obligations.
