#include<iostream>
using namespace std;
int main(){
    int array[]={2,3,1,3,2,4,1};
  
    for(int i=0 ; i<7;i++){
        int a=array[i];
  
        for(int b=i+1;b<7;b++){
            int c=array[b];
            //cout<<c<<endl;
            if(a==c){
                array[i]=array[b]=0;
            } 
            
        }   
    }
    for(int m=0;m<7;m++){
        if(array[m]!=0){
            cout<<"unique no. is"<<array[m]<<endl;
        }
    }
            
        
   

}