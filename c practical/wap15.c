#include<stdio.h>
int insertionsort(int arr[],int n){
    for(int i=0;i<n;i++){
        int current=arr[i];
        int j = i-1;
        while(j>=0 && (arr[j]>current)){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;

    }
}
int main(){
    int arr[]={11,8,5,9,14};
    int n = sizeof(arr)/sizeof(arr[0]);
    insertionsort(arr,n);
    for(int i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
}


