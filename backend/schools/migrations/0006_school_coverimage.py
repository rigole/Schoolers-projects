# Generated by Django 4.0.5 on 2023-01-12 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0005_program_delete_programs'),
    ]

    operations = [
        migrations.AddField(
            model_name='school',
            name='coverImage',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
