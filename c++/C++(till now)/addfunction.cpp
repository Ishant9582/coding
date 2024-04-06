#include<iostream>
using namespace std;
int add(int num1,int num2){
    int v=num1+num2;
    return v;


}
float add(float num1 , float num2){
    float m= num1 +num2;
    return m;
    //or

    //return(num1+num2) ;
}
int main(){
    int a =2;
    int b = 3;
    float c = 2.2;
    float d = 2.4;

    //int  v = add(a,b);
    //cout<<add(c,d);
    //cout<<v;
    float f;
    f = add(c,d);
    cout<<f;
    
}