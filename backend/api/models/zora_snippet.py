from django.db import models


class ZoraSnippet(models.Model):
    date = models.DateField(null=False, blank=False)
    title = models.CharField(max_length=191, null=False, blank=False)
    path = models.TextField(null=False, blank=False)

