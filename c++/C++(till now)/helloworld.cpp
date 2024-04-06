#include<iostream>
using namespace std;
int main(){
    int n= 121;
    int number=0;
    int digit=0;
    int real=n;
    for(int i=n ; i>0 ;){
        digit = i%10;
        number = (number*10) + digit ;
        
        i=i/10;

    }
    if(number==real){
        cout<<"palindrome";
    }
   
}