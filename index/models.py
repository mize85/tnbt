from django.db import models
#
# # Create your models here.
# class IndexPage(models.Model):
#
#     hash = models.CharField(max_length=10)
#     index_name = models.CharField(max_length=40)
#     is_current = models.BooleanField(default=False)
#
#     def save(self, *args, **kwargs):
#         if self.is_current:
#             IndexPage.objects.filter(is_current=True).update(is_current=False)
#         super(IndexPage, self).save(*args, **kwargs)