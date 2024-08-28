#include<iostream>
using namespace std;
int main(){
    int arr[]={20,60,40,10,30};
    bool flag=false;
    for(int i=0;i<4;i++){
        bool flag=false;
        
        for(int j=0 ; j<4; j++){
            if(arr[j]>arr[j+1]){
                flag=true;

                swap(arr[j],arr[j+1]);
            }
        }
        if(!flag) break ;

    }
    for(int i=0 ; i<5 ; i++){
        cout<<arr[i]<<" ";
    }
}
