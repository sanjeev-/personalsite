from graphene_django import DjangoObjectType
from .models import User
import graphene


class User(DjangoObjectType):
    class Meta:
        model = User


class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        return UserModel.objects.all()


schema = graphene.Schema(query=Query)
