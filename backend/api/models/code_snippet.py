from django.db import models
from enum import Enum, unique
from api.utils.django_utils import get_choices


@unique
class LanguageType(Enum):
    PYTHON = "PYTHON"
    JAVASCRIPT = "JAVASCRIPT"
    SCALA = "SCALA"
    BASH = "BASH"
    SQL = "SQL"
    YAML = "YAML"
    HCL = "HCL"


@unique
class CategoryType(Enum):
    DATA_SCIENCE = "DATA_SCIENCE"
    DEV_OPS = "DEV_OPS"
    BACK_END = "BACK_END"
    FRONT_END = "FRONT_END"
    ANALYTICS = "ANALYTICS"


class CodeSnippet(models.Model):
    LANGUAGE_CHOICES = get_choices(LanguageType)
    CATEGORY_CHOICES = get_choices(CategoryType)

    snippet_name = models.CharField(max_length=191, null=False, blank=False)

    language = models.CharField(
        choices=LANGUAGE_CHOICES, max_length=191, null=False, blank=False
    )

    category = models.CharField(
        choices=CATEGORY_CHOICES, max_length=191, null=False, blank=False
    )

    github_file_name = models.TextField(
        null=False, blank=False
    )  # e.g. "univariate_feature_selector.py"
    preview = models.CharField(max_length=191, null=False, blank=False)
    description = models.TextField(null=False, blank=False)

