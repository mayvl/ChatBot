from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):   
        model = CustomUser
        fields = ('name', 'lastname', 'email', 'birth')