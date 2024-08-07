# Generated by Django 4.1.13 on 2024-07-09 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0007_remove_users_starch_users_last_login_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="users",
            old_name="isadmin",
            new_name="is_admin",
        ),
        migrations.AlterField(
            model_name="users",
            name="addresses",
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name="users",
            name="created_at",
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name="users",
            name="last_modified",
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name="users",
            name="password",
            field=models.CharField(max_length=128),
        ),
    ]
