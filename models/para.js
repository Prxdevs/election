const mongoose = require("mongoose");

const paraSchema = mongoose.Schema(
	{
		name: {
			type: String,
		},
		AC_NO:{
			type:Number,
		},
		AC_NAME_EN:{
			type:String,
		},
		AC_NAME_V1:{
			type:String,
		},
		PART_NO:{
			type:Number,
		},
		PART_NAME_EN:{
			type:String,
		},
		PART_NAME_V1:{
			type:String,
		},
		PSBUILDING_DETAIL:{
			type:String,
		},
		PSBUILDING_ID:{
			type:Number,
		},
		PSBUILDING_NAME_V1:{
			type:String,
		},
		PSBUILDING_NAME_EN:{
			type:String,
		},
		SECTION_NO:{
			type:Number,
		},
		SECTION_NAME_EN:{
			type:String,
		},
		SECTION_NAME_V1:{
			type:String,
		},
		PIN_CODE:{
			type:Number,
		},
		SLNOINPART:{
			type:Number,
		},
		c_HOUSE_NO:{
			type:Number,
		},
		c_HOUSE_NO_V1:{
			type:Number,
		},
		FM_NAME_EN:{
			type:String,
		},
		LASTNAME_EN:{
			type:String,
		},
		FM_NAME_V1:{
			type:String,
		},
		LASTNAME_V1:{
			type:String,
		},
		RLN_TYPE:{
			type:String,
		},
		RLN_FM_NM_EN:{
			type:String,
		},
		RLN_L_NM_EN:{
			type:String,
		},
		GENDER: {
			type: String,
			enum: ["F", "M"], // Add enum validation for gender values
		  },
		AGE:{
			type: Number,
		},
		MOBILE_NO:{
			type: String,
		},
		DOB:{
			type: String,
		},
		EPIC_NO:{
			type: String,
		},
		created_at: {
			type: Date,
			default: Date.now,
		},
		updated_at: {
			type: Date,
			default: Date.now,
		},
		
	},
	{
		versionKey: false,
	}
);

exports.Para = mongoose.model("Para", paraSchema);
