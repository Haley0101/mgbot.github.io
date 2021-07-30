import os
import discord
import asyncio
from sanic import Sanic, response, Request
from sanic_cors import CORS, cross_origin


bot = discord.Client(intents=discord.Intents.all())
app = Sanic(__name__)
CORS(app)


@app.route('/')
async def root(request: Request):
    return response.json({"Hello": "World!"})


@app.route('/api', methods=["GET", "POST"])
async def api(request: Request):
    return response.json({"users": len(bot.users), "guilds": len(bot.guilds)})

loop = asyncio.get_event_loop()

asyncio.ensure_future(bot.start('NzQ1MTc3ODY0MTU1OTU1MjAx.Xzt-9w.KqLBUGteHOwUgo22TN8rYlnyIJ0'))
asyncio.ensure_future(app.create_server(host = 'localhost', port = 5000, return_asyncio_server=True))
loop.run_forever()