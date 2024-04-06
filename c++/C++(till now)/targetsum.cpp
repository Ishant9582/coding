#include<iostream>
using namespace std;
int main(){
    int array[]={3,4,6,7,1};
    int targetsum=7;
    for(int i=0 ; i<5;i++){
        int a=array[i];
        //cout<<a<<endl;
        //cout<<a<<endl;
        for(int b=i+1;b<5;b++){
            int c=array[b];
            //cout<<c<<endl;
            if((a+c)==targetsum){
                cout<<a<<c<<endl;
            }
           
            
        }
    }

}