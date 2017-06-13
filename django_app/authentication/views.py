from django.contrib.auth import authenticate
from rest_framework_jwt.settings import api_settings
from rest_framework.generics import GenericAPIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework import authentication, permissions

from rest_framework import status, viewsets, filters
from rest_framework.views import APIView

from .serializer import AccountSerializer
from .models import Account


class AuthRegister(APIView):
    serializer_class = AccountSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserListView(APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = AccountSerializer

    def get(self, request, format=None):
        queryset = Account.objects.all()
        serializer = AccountSerializer(queryset, many=True, data=request.data)

        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
