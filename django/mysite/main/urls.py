from django.urls import path
from . import views

urlpatterns =[
    path("signup/",views.signup,name="signup"),
    path("login/",views.login,name="login"),
    path("home/",views.home,name="home"),
    path("start/",views.start,name="start"),
    path("new/",views.new,name="new"),
    path("table/",views.table,name="table"),
    path("",views.index,name="index"),
]