xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel8")
                .setDock("none")
                .setLeft("-0.16666666666666666em")
                .setTop("-0.16666666666666666em")
                .setWidth("64.83333333333333em")
                .setHeight("48.166666666666664em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("moonify")
                .setCaption("Search")
                .setCustomStyle({
                    "KEY":{
                        "margin":"1em"
                    }
                })
            );
            
            host.xui_ui_panel8.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews6")
                .setItems([
                    {
                        "id":"a",
                        "caption":"Name",
                        "image":"",
                        "imageClass":"xui-uicmd-add"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.666666666666667em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews6.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setLeft("10.333333333333334em")
                .setTop("7.166666666666667em")
                .setWidth("31.833333333333332em")
                .setHeight("1.8333333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Full Name"),
                "a"
            );
            
            host.xui_ui_buttonviews6.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setLeft("10.333333333333334em")
                .setTop("10.833333333333334em")
                .setWidth("31.833333333333332em")
                .setHeight("1.8333333333333333em")
                .setLabelSize("8em")
                .setLabelCaption("Location    "),
                "a"
            );
            
            host.xui_ui_buttonviews6.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button8")
                .setLeft("35.333333333333336em")
                .setTop("14.666666666666666em")
                .setWidth("6.583333333333333em")
                .setHeight("3.1666666666666665em")
                .setCaption("Search"),
                "a"
            );
            
            host.xui_ui_panel8.append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list3")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
                .setLeft("4.5em")
                .setTop("20.5em")
                .setWidth("56.666666666666664em")
                .setHeight("22.5em")
                .setLabelSize("8.333333333333334em")
                .setLabelCaption("Results")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});