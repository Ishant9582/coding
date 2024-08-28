#include <stdio.h>
int linearSearch(int arr[], int size, int target) {
    for (int i = 0; i < size; ++i) {
        if (arr[i] == target) {
            return i; 
        }
    } 
    return -1; 
}
int main() {
    int arr[] = {32,34,56,78,65,87,};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target ;
    printf("enter value to search :");
    scanf("%d",&target);
    int result = linearSearch(arr, size, target);
    if (result != -1) {
        printf("Element %d found at index %d.\n", target, result);
    } else {
        printf("Element %d not found in the array.\n", target);
    }

    return 0;
}
