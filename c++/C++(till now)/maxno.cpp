#include<iostream>
using namespace std;
int main(){
    int array[]={11,12,13,14,15,16};
    int max;
    int indexoflargest=0;
    for(int i=0 ; i<7;i++){
        
  
        for(int b=i+1;b<7;b++){
            
            //cout<<c<<endl;
            if(array[i]>array[b]){
                max = array[i];
                indexoflargest=i;

                     
            }     
        }   
    }
    cout<<max<<endl;
    cout<<indexoflargest<<endl;
    
    array[5]=0;
}    
   