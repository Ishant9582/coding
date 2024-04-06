#include<iostream>
#include<string.h>
using namespace std;
int main(){
    string s = "welcome leo" ;
    char ch[20] ;
    //s.copy(ch , s.length());
    s.copy(ch , 3);        // if we dont want to copy whole string
    ch[3] = '\0';          // as in order to place null character
    cout<<ch<<endl ;
    //int a = s.find('l');
     int a = s.find('x');   // agr koi aasa use kr dia jo exist hi nhi krta then out of length answer milega ya -1
    cout<<a<<endl;
    cout<<s.find_first_of("ol")<<endl;       // isme ye jo pehle aa rha uska index dega ie 2 dega yha
    
}