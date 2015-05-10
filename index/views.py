import os
from django.conf import settings
from django.shortcuts import render, render_to_response

# Create your views here.

def static_index_view(request):
    # hash_id = request.GET.get('hash_id', '')
    #
    # index = IndexPage.objects.get(is_current=True)
    #
    # if hash_id:
    #     try:
    #         index = IndexPage.objects.get(hash=hash_id)
    #     except IndexPage.DoesNotExist:
    #         pass
    #
    # logger.debug("Using index: %s" % index.hash)
    path = os.path.normpath(os.path.join(settings.BASE_DIR, 'index', 'static'))
    # logger.debug(path)

    #return render_to_response(index.index_name, dirs=[path, ])
    return render_to_response("index.html", dirs=[path, ])

