#include<iostream>
using namespace std;
int main(){
    int array[5]={1,2,9,5,4,};
    int max=0;
    int size=sizeof(array)/sizeof(array[0]);
    for(int i=0 ; i<size ; i++){
        if(array[i]>array[i-1]){
            max=array[i];
        }
        

    }
    cout<<max<<endl;
    
}