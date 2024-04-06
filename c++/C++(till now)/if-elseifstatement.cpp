#include<iostream>;
using namespace std;
int main(){
    int age;
    cin>>age;
    if (age<12){
        cout<<"child";
    }
    else if (12<=age<=118){
        cout<<"teenager";
    }
    else{
        cout<<"adult";
    }

}