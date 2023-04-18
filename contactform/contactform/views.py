from django.core.mail import send_mail
from django.http import JsonResponse

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        send_mail(
            'Contact form submission',
            f'Name: {name}\nEmai: {email}\nMessage: {message}',
            'from@example.com',
            ['to@example.com'],
            fail_silently=False,
        )
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})
