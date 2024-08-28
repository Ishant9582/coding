#include<iostream>
using namespace std;
int main(){
    int array[5]={0,1,2,3,5};
  
    int size=sizeof(array)/sizeof(array[0]);
    for(int i=0;i<size;i++){
        cout<<array[i]<<endl;
    }
    for(int element:array){
        cout<<element<<endl;
    }
    int i=0;
    while (i<size){
        cout<<i<<endl;
        i++;
    }
    
    

}