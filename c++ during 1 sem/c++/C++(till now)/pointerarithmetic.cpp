#include<iostream>
using namespace std;
int main(){
    int arr[]={1,5,3};

    int *ptr= &arr[0];
   // cout<<ptr<<" "<<*ptr<<endl;
    
   // cout<<ptr+1<<" "<<*(ptr+1);
    cout<<*ptr++<<endl; 

    //ptr++;
    cout<<*ptr<<endl;
}
