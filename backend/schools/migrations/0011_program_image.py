# Generated by Django 4.0.5 on 2023-04-17 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schools', '0010_studyfield_description_studyfield_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='program',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]