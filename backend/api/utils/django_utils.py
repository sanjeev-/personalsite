def get_choices(choices_enum_class):

    choices = tuple(
        (enum_member.value, enum_member.name) for enum_member in choices_enum_class
    )

    return choices
