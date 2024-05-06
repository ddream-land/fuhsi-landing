import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

export const pcInfor = defineStore("pcInfor", {
    state: () => {
        return {
            pcInfor: {} as any,
        };
    },
    actions: {
        // 登录存储管理员信息
        loginIn(data = {} as any) {
            this.pcInfor = data;
            ElMessage({
                message: `欢迎您！${data.name ? data.name : data.account}`,
                type: "success",
                showClose: true,
                center: true,
                duration: 1000,
            });
            useRouter().push({ name: "pc" });
        },
        // 退出登录
        logOut() {
            pcInfor().$reset();
            localStorage.clear();
            sessionStorage.clear();
            ElMessage({
                message: "已退出登录",
                showClose: true,
                center: true,
                duration: 2000,
            });
            useRouter().push({ name: "pc" });
        },
    },
    // 持久化
    persist: true,
});
