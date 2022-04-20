<template>
<!--  ref="form"-->
    <el-form ref="form" label-width="100px" :model="form" :rules="rules" :inline="inline" :disabled="isDisabled">
        <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label" :prop="item.model">
            <el-input
                v-if="item.type === 'input'"
                :placeholder="'请输入' + item.label"
                v-model="form[item.model]"
            ></el-input>

             <el-switch
                v-if="item.type === 'switch'"
                v-model="form[item.model]"
            ></el-switch>
            <el-input
              v-if="item.type === 'text'"
              type="textarea"
              style="width: 600px"
              placeholder="请输入内容"
              v-model="form[item.model]"
              maxlength="1000"
              show-word-limit
              :autosize="{ minRows: 8, maxRows: 10}"
            >
            </el-input>
            <el-date-picker
                v-if="item.type === 'date'"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                v-model="form[item.model]"
            ></el-date-picker>

            <el-select
                v-if="item.type === 'select'"
                placeholder="请选择"
                v-model="form[item.model]"
            >
                <el-option
                    v-for="item in item.opts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
            <el-input-number
              style="width: 200px"
              v-if="item.type === 'number'"
              v-model="form[item.model]"
              :min="1"
              @change="numberChange"
              :max="form.number"
              label="描述文字">
            </el-input-number>
            <el-upload
              v-if="item.type === 'upload'"
              style="width: 207px"
              class="upload-demo"
              action=""
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple="false"
              :limit="1"
              :http-request="uploadFile"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-image style="width: 100px;height: 100px"
               :src="form[item.model]"
                        fit="fill"
              >
                <div slot="error" class="image-slot">
                  <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
                </div>
              </el-image>
              <el-progress v-show="progressFlag" :percentage="loadProgress"></el-progress>
            </el-upload>

        </el-form-item>

        <el-form-item>
            <slot></slot>
        </el-form-item>
    </el-form>

</template>
<script>
import file from "../api/file";
export default {
    name: 'CommonForm',
    data() {
        return {
          fileList: [],
          progressFlag: false,
          loadProgress: 0,
        }
    },
    props: {
      formLabel: Array,
      form: Object,
      inline: Boolean,
      isDisabled: true,
      rules:{
        type: Object
      }
    },
    mounted() {
      console.log(this.isDisabled)
    },
    methods: {
      numberChange(currentValue, oldValue){
        if (currentValue < oldValue) {
          this.form.number = this.form.number +1
        } else {
          this.form.number = this.form.number -1
        }
        this.form.total = this.accMul(this.form.quantity,this.form.price)
      },
      accMul(arg1,arg2)
      {
        var m=0,s1=arg1.toString(),s2=arg2.toString();
        try{m+=s1.split(".")[1].length}catch(e){}
        try{m+=s2.split(".")[1].length}catch(e){}
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
      },
      uploadFile(param){
        this.progressFlag = true; // 显示进度条
        this.loadProgress = 0;
        const interval = setInterval(() => {
          if(this.loadProgress >=99){
            clearInterval(interval)
            return
          }
          this.loadProgress += 1

        }, 20);
        const formData = new FormData()
        formData.append('file', param.file)
        file.upload(formData).then((res) => {
          if (res.code === 200){
            this.$message.success("上传成功")
            this.progressFlag = false; // 显示进度条
            this.loadProgress = 100;
            const picModel = this.findPicModel()
            const model = picModel.model
            this.form[model] = res.data
          }
        })
      },
      findPicModel(){
        const data = this.formLabel
        return data.find(item => {
          return item.type === 'upload'
        })
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      uploadVideoProcess(file, fileList) {
        if(file.status === 'ready'){
          this.progressFlag = true; // 显示进度条
          this.loadProgress = 0;
          const interval = setInterval(() => {
            if(this.loadProgress >=99){
              clearInterval(interval)
              return
            }
            this.loadProgress += 1

          }, 20);
        }
        if (file.status === 'success') {
          this.progressFlag = false; // 显示进度条
          this.loadProgress = 100;
        }
      }
    }
}
</script>

<style lang="less" spcoed>
//.textarea deep .el-textarea__inner{
//  //min-height: 300px;
//  //font-family:"Microsoft" !important;
//  //font-size:20px !important;
//}
.el-input.is-disabled .el-input__inner {
  background-color: #FFF;
  border-color: #E4E7ED;
  color: #606266;
  cursor: not-allowed;
}
.el-textarea.is-disabled .el-textarea__inner {
  background-color: #FFF;
  border-color: #E4E7ED;
  color: #606266;
  cursor: not-allowed;
}
</style>
