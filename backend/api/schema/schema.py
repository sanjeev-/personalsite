from graphene_django import DjangoObjectType
from api.models import User, ZoraSnippet, CodeSnippet

import graphene


class UserType(DjangoObjectType):
    class Meta:
        model = User


class ZoraSnippetType(DjangoObjectType):
    class Meta:
        model = ZoraSnippet


class CodeSnippetType(DjangoObjectType):
    class Meta:
        model = CodeSnippet


def resolve_code_snippet_by_id(self, info, id):
    return CodeSnippet.objects.get(id=id)


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    retrieve_zora_snippets = graphene.List(ZoraSnippetType)
    retrieve_code_snippets = graphene.List(CodeSnippetType)
    code_snippet_by_id = graphene.Field(
        CodeSnippetType,
        id=graphene.ID(required=True),
        resolver=resolve_code_snippet_by_id,
    )

    def resolve_users(self, info):
        return User.objects.all()

    def resolve_retrieve_zora_snippets(self, info):
        return ZoraSnippet.objects.all()

    def resolve_retrieve_code_snippets(self, info):
        return CodeSnippet.objects.all()


schema = graphene.Schema(query=Query)
