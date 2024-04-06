#include<iostream>
using namespace std;
int main(){
    int arr[]={1,2,3,5,5};
    int max =0;
  
    for(int i=0 ; i<5;i++){
        if(arr[i]>arr[i-1]){
            max = i;
        }
    }
    int a=arr[max];
    cout<<a<<endl;
    for(int i = 0 ;i<5 ; i++){
        if(arr[i]==a){     // we cant do arr[i]=arr[max ] here
            arr[i]=-1;
        }
    }
    int secondmax;
    cout<<arr[max]<<endl;
    
    for(int i=0 ; i<5;i++){
        if(arr[i]>arr[i-1]){
            secondmax = i;
        }
    }
    cout<<"second largest"<<arr[secondmax]<<" ";    
}

    

