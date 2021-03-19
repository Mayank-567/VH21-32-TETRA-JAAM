from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.
@csrf_exempt
def get_form_data(request):
    attribute_data = json.load(request)['data']
    print(attribute_data)
    return JsonResponse({'status':200})