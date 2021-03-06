import { defineStore } from "pinia";
import DepartmentService from '../service/department.service';

export const useDepartments = defineStore({
    id: "department",
    state: () => ({
        departments: [],
        isError: false,
        isSuccess: false,
        errorMessage: "",
        successMessage: "",
        processing: false,
    }),
    getters:{},
    actions: {
        fetchAllDepartments(slug = "") {
            this.processing = true;
            DepartmentService.all(slug).then(response => {
                this.departments = response.data.data
            }).catch((error) => {
                this.errorMessage = error.data.message
                this.error = true;
            }).finally(() => {
                this.processing = false;
            })
        },
        createDepartment(payload) {
            this.processing = true
            DepartmentService.create(payload).then(() => {
                this.successMessage = "Department successfully created"
            }).catch((error) => {
                this.errorMessage = error.data.message
                this.error = true;
            }).finally(() => {
                this.processing = false;
            })
        }
    },
    persist: true
});