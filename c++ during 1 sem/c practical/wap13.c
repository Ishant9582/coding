#include <stdio.h>
int main() {
    FILE *filePointer;
    char data[100];
    filePointer = fopen("hello.txt", "a");
    if (filePointer == NULL) {
        printf("File failed to open.");
        return -1;
    }
    printf("Enter data to append to the file: \n");
    fgets(data, sizeof(data), stdin); 
    fputs(data, filePointer);
    fclose(filePointer);
    printf("Data has been appended to the file.\n");
    return 0;
}