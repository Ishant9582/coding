#include <iostream>
//#include <conio.h>
using namespace std;
int main()
{
    char ch;
    //cout<<"Enter any Alpabet\n"; //input alphabet from user
    cin>>ch;//store the Entered Alphabet in ch

    switch(ch){
    //check lower case vowel letters
    case 'a':
    cout<<ch<<" is a vowel";
    break;

    case 'e':
    cout<<ch<<" is a vowel";
    break;

    case 'i':
    cout<<ch<<" is a vowel";
    break;

    case 'o':
    cout<<ch<<" is a vowel";
    break;

    case 'u':
    cout<<ch<<" is a vowel";
    break;
    case 'A':
    cout<<ch<<" is a vowel";
    break;

    case 'E':
    cout<<ch<<" is a vowel";
    break;

    case 'I':
    cout<<ch<<" is a vowel";
    break;

    case 'O':
    cout<<ch<<" is a vowel";
    break;

    case 'U':
    cout<<ch<<" is a vowel";
    break;
    default :
    cout<<"consonants" ;
    break;
    }
}    

