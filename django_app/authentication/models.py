from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class AccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have a email address')

        email = AccountManager.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        return self.create_user(email, password)


class Account(AbstractBaseUser):
    email = models.EmailField(max_length=128, unique=True)
    company = models.CharField(max_length=128, null=True)

    USERNAME_FIELD = 'email'

    objects = AccountManager()

    class Meta:
        db_table = 'api_user'
        swappable = 'AUTH_USER_MODEL'
