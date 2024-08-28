#include <stdio.h>
int main(){
    int arr[5];
    for (int i = 0; i < 5; i++){
        printf("Enter the number %d: ", i + 1);
        scanf("%d", &arr[i]);
    }
    printf("The numbers in the array are:\n");
    for (int i = 0; i < 5; i++){
        printf("%d ",arr[i]);
    }
    return 0;
}