from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def greeting(request):
    return Response({"message": "Hello, welcome to my site!"})

@api_view(['GET'])
def about(request):
    return Response({"info": "This is my simple website built using React and Django."})
