export var img = { 
    data:function(){ 
        return { 
            value:"" 
        } 
    }, 
    mounted() { 
        this.value = this.modelValue; 
    }, 
    methods: { 
        change(event) { 
            var self = this; 
            var file = event.target.files[0]; 
            var reader = new FileReader(); 
            reader.onload = function() { 
                self.value = reader.result; 
            }; 
    
            this.$emit('update:modelValue', event.target.files[0]); 
        }
    },
    props: { 
        modelValue: String // раньше было 'value: String 
    },
    template: `
        <div class="image-preview-area"> 
            <a href="#" class="select_img" @click.prevent="$refs.input.click()"> 
                <span v-if="value"> 
                    <img src="value" class="in"> 
                </span> 
                <span v-if="value"> 
                    <img src="/app/views/images/placeholder.png"> 
                </span> 
            </a> 
        </div> 
        <input type="file" data-name="image" ref="input" accept="image/ e/jpeg, image/png,image/gif, f.image/webp, image/svg+xml" @change="change(se 
    `
};