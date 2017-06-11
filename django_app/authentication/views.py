from django.contrib.auth import authenticate
from rest_framework_jwt.settings import api_settings
from rest_framework.generics import GenericAPIView
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from rest_framework import status
from rest_framework.views import APIView

from .serializer import AccountSerializer
from .models import Account

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class AuthRegister(APIView):
    serializer_class = AccountSerializer
    permission_classes = (AllowAny,)

    def post(self, request, format=None):
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # user = authenticate(**serializer.data)
        # if not user:
        #     raise AuthenticationFailed()
        # payload = jwt_payload_handler(user)
        # return Response({
        #     'token': jwt_encode_handler(payload),
        # })
