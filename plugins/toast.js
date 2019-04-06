import Vue from 'vue';
import Toast from '@/components/public/toast/Toast.vue'

function install(Vue, options = {}) {

  if (install.installed) return // 如果已经注册过了，就跳过
  install.installed = true;

  const VueToast = Vue.extend(Toast); // 返回一个“扩展实例构造器”

  function $toast({ message }) {

    const toast = new VueToast(); // 实例化构造器

    toast.$mount(); // 挂载 并 生成节点 $el  

    document.getElementsByTagName("body")[0].appendChild(toast.$el);

    toast.show({ message });

    setTimeout(() => {
      toast.hide();
    }, 3000);

  }

  Object.defineProperties(Vue.prototype, {
    $toast: {
      value: $toast // 绑定值
    }
  });

}

Vue.use(install);