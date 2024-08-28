#include<iostream>
using namespace std;
int main(){
    int a;
    cin>>a;
    int ans=0;
    int power=1;
    while(a>0){
        int lastdigit=a%10;
        ans+=power*lastdigit;
        power*=2;
        a=a/10;

    }
    cout<<ans;
}    

    

   