from flask.blueprints import Blueprint;
from flask import request;
import requests;

public_service = Blueprint("public_service", __name__);

@public_service.route('/map/', methods=["GET"])
def getMap():
    """GetMap Geometry"""
    name = request.args.get('name')
    api = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cname%2Cgeometry&input="+name+"&inputtype=textquery&key=AIzaSyA-qMZH7RHVDaKHMp-41EuPuP2-VSYwDGE";
    response = requests.get(api);
    # print(response.json())
    response_to = response.json();
    location = response_to['candidates'];
    return location[0]['geometry']['location'];