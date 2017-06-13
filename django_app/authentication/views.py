from django.contrib.auth import authenticate
from rest_framework_jwt.settings import api_settings
from rest_framework.generics import GenericAPIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework import authentication, permissions, generics
from django.db import transaction

from rest_framework import status, viewsets, filters
from rest_framework.views import APIView

from .serializer import AccountSerializer
from .models import Account, AccountManager


# class AuthRegister(APIView):
#     serializer_class = AccountSerializer
#     permission_classes = (permissions.AllowAny,)
#
#     def post(self, request, format=None):
#         # serializer = self.get_serializer(data=request.data)
#         # serializer.is_valid(raise_exception=True)
#         # self.perform_create(serializer)
#         # return Response(serializer.data, status=status.HTTP_201_CREATED)
#         serializer = AccountSerializer(data=request.data)
#         print(request.data)
#         if serializer.is_valid():
#             AccountManager.create_user(request.data)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserListView(APIView):
    serializer_class = AccountSerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        queryset = Account.objects.all()
        serializer = AccountSerializer(queryset, many=True, data=request.data)

        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthRegister(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    @transaction.atomic
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
