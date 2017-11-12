function Querystring(qs){var args,i,pair,name,value;if(this.params={},qs||(qs=location.search.substring(1,location.search.length)),0===qs.length)return null;for(args=qs.replace(/\+/g," ").split("&"),i=0;i<args.length;i++)pair=args[i].split("="),name=decodeURIComponent(pair[0]),value=2===pair.length?decodeURIComponent(pair[1]):name,this.params[name]=value}var COOKIE_EXPIRE_DATE=new Date;COOKIE_EXPIRE_DATE.setFullYear(COOKIE_EXPIRE_DATE.getFullYear()+1),Prototype.Browser.Xcode=navigator.userAgent.indexOf("Xcode/")>-1,Prototype.Browser.XcodeVersion=parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Xcode/")+6,navigator.userAgent.length)),Prototype.Browser.Xcode4OrNewer=Prototype.Browser.XcodeVersion<1e3,String.prototype.directoryForURL=function(){var url=this.split("#")[0];return url.replace(/[^\/]+\.[^\/]+$/,"")},String.prototype.isHTTPurl=function(){return this.match(/^https?:\/\//)};var DevPubs={init:function(){},generator:document.getElementById("generator")?document.getElementById("generator").content:"Unknown",Window:function(id){var box,header,contents,footer;box=document.createElement("div"),header=document.createElement("div"),contents=document.createElement("div"),footer=document.createElement("div"),box.setAttribute("id",id+"Window"),header.setAttribute("id",id+"Header"),contents.setAttribute("id",id+"Body"),footer.setAttribute("id",id+"Footer"),box.appendChild(header),box.appendChild(contents),box.appendChild(footer),box.style.display="none",document.body.appendChild(box),this.box=$(id+"Window"),this.header=$(id+"Header"),this.contents=$(id+"Body"),this.footer=$(id+"Footer")},constructNativeVideos:function(){Array.prototype.forEach.call(document.getElementsByTagName("video"),function(video){new NativeVideo(video)})}},Cookie={set:function(parameters){if(null!==localStorage&&"undefined"!=typeof localStorage){try{localStorage.setItem(parameters.cName,parameters.cValue)}catch(e){return e}return parameters.cValue}return""===parameters.cDomain&&window.location.domain&&(parameters.cDomain=window.location.domain),document.cookie=parameters.cName+"="+escape(parameters.cValue)+(parameters.cExpiry?"; expires="+parameters.cExpiry.toGMTString():"")+(parameters.cDomain?"; domain="+parameters.cDomain:"")+(parameters.cPath?"; path="+parameters.cPath:"; path="+window.location.pathname)},get:function(cookie_name){if(null!==localStorage&&"undefined"!=typeof localStorage&&"null"!==localStorage.getItem(cookie_name))return localStorage.getItem(cookie_name);var cookie_array,i,aCookie;for(cookie_array=document.cookie.split(";"),i=0;i<cookie_array.length;i++){for(aCookie=cookie_array[i];" "===aCookie.charAt(0);)aCookie=aCookie.substring(1,aCookie.length);if(0===aCookie.indexOf(cookie_name+"="))return null!==localStorage&&"undefined"!=typeof localStorage?(localStorage.setItem(cookie_name,aCookie.substring(cookie_name.length+1,aCookie.length)),Cookie.forceExpire(cookie_name),localStorage.getItem(cookie_name)):aCookie.substring(cookie_name.length+1,aCookie.length)}return null},expire:function(cookie_name){return null!==localStorage&&"undefined"!=typeof localStorage?localStorage.removeItem(cookie_name):Cookie.forceExpire(cookie_name)},forceExpire:function(cookie_name){var past=new Date;return past.setUTCFullYear(2e3),this.set({cName:cookie_name,cValue:null,cExpiry:past,cPath:"/"})}};Querystring.prototype.get=function(key,default_){var value=this.params[key];return null!==value?value:default_},Querystring.prototype.contains=function(key){var value=this.params[key];return null!==value},Prototype.Query=new Querystring,Prototype.HashQuery=new Querystring(location.hash.replace(/#/,""));var NativeVideo=function(video){var _this=this,overlay=document.createElement("div");overlay.setAttribute("class","playButtonOverlay");var container=video.parentNode;return container.insertBefore(overlay,video),video.addEventListener("click",function(event){_this.togglePlayback(event)}),video.addEventListener("touchend",function(event){_this.togglePlayback(event)}),video.addEventListener("play",function(){_this.play()}),video.addEventListener("pause",function(){_this.pause()}),video.addEventListener("ended",function(){_this.rewind()}),video.addEventListener("keypress",function(e){32===e.keyCode&&(e.preventDefault(),_this.togglePlayback(e))}),this.NATIVE_CONTROLS_HEIGHT=24,this.video={element:video,height:video.getAttribute("height")},this.overlay=container.querySelector(".playButtonOverlay"),this.video.element.setAttribute("controls","controls"),this.video.element};NativeVideo.prototype={togglePlayback:function(e){e&&e.offsetY>this.video.height-this.NATIVE_CONTROLS_HEIGHT||(this.isPaused()?this.play():this.pause())},play:function(){var vid=this.video.element;this.overlay.classList.add("hide"),vid.play(),vid.focus()},pause:function(){var vid=this.video.element,overlay=this.overlay;vid.pause(),vid.focus(),overlay.classList.remove("hide")},isPaused:function(){return this.video.element.paused},rewind:function(){this.pause(),this.video.element.currentTime=0}},window.addEventListener("load",function(){DevPubs.init(),"undefined"!=typeof Tasks&&Tasks.init(),DevPubs.constructNativeVideos()}),String.prototype.highlight=function(){return"<span class='highlightedSearchTerm'>"+this+"</span>"},String.prototype.escapeRegExp=function(){return this.replace(/(\/|\.|\^|\=|\!|\:|\$|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g,"\\$1")},String.prototype.compareable=function(){return this.replace(/(\s|&amp;)/g,"").toLowerCase()};var LIBRARY={},STRINGS={tableHeadRowOpen:"<table id='documentsTable'><thead id='docTableHead'><tr>",tableHeadRowClose:"</tr></thead>",nameTableHead:"<th id='name' class='names'><span class='sortArrow'></span>Title</th>",platformTableHead:"<th id='platforms' style='display:none;'><span class='sortArrow'></span>Platform</th>",typeTableHead:"<th id='type' class='types'><span class='sortArrow'></span>Resource Type</th>",topicTableHead:"<th id='topic' class='topics'><span class='sortArrow'></span>Topic</th>",frameworkTableHead:"<th id='technology' class='technologies'><span class='sortArrow'></span>Technology</th>",dateTableHead:"<th id='date' class='revisionDates'><span class='sortArrow'></span>Date</th>",noDocumentsFound:"<tr><td colspan='6' id='noDocumentsFound'><p>No Documents Found</p><p>The entire search term must match for an entry to show.<br> If you entered more than one word, try again with fewer words.</p><p id='fulltextsearch'></p></td></tr></table>"},Navigation={selected:null,gettingStartedList:[],toggleSection:function(element){return event.target.hasClassName("disclosure")?element.childElements()[0].hasClassName("closed")?(element.next().removeClassName("closed"),Cookie.expire(Book.title+"_"+element.id),element.childElements()[0].removeClassName("closed")):(element.next().addClassName("closed"),Cookie.set({cName:Book.title+"_"+element.id,cValue:"closed",cPath:"/",cExpiry:COOKIE_EXPIRE_DATE}),Navigation.selected.getAttribute("data-topic")&&LIBRARY.topics[Navigation.selected.getAttribute("data-topic")].name===element.innerHTML&&Navigation.selectItem($("showAllDocs")),element.childElements()[0].addClassName("closed")):void 0},selectItem:function(element){return Navigation.selected&&Navigation.selected.removeClassName("selected"),element&&(Navigation.selected=element.addClassName("selected")),Doc.doesShowGettingStarted=Navigation.selected.getAttribute("data-topic")&&Navigation.selected.hasClassName("group")&&"Topics"===LIBRARY.topics[Navigation.selected.getAttribute("data-topic")].name,"showAllDocs"===element.id?($("contentBox").removeClassName("show"),$("frontPageTabContainer")&&$("frontPageTabContainer").removeClassName("hide")):(Navigation.getAndShowDetailsFor(element),$("contentBox").addClassName("show"),$("frontPageTabContainer")&&$("frontPageTabContainer").addClassName("hide")),Navigation.selected},getAndShowDetailsFor:function(element){for(var contents={},x=0;x<LIBRARY.topics[element.getAttribute("data-topic")].contents.length;x++){var content=LIBRARY.topics[element.getAttribute("data-topic")].contents[x];contents[content.key]=content}var getDetails,thisID=element.id.replace(/navigation\_|subtopic\_/g,""),thisTopic=isNaN(thisID)?LIBRARY.topics[element.getAttribute("data-topic")]:contents[thisID],showDetails=function(transport){thisTopic.details=transport.responseText,$("currentFilter_Description").innerHTML=thisTopic.details,$("currentFilter_Description").addClassName("visible")};$("currentFilter_Description").removeClassName("visible"),thisTopic.details?($("currentFilter_Description").innerHTML=thisTopic.details,$("currentFilter_Description").addClassName("visible")):getDetails=new Ajax.Request("topic_details/"+thisTopic.id+".html",{method:"get",onSuccess:showDetails}),"textContent"in element?$("currentFilter_Title").textContent=element.textContent:$("currentFilter_Title").innerText=element.innerText,"Technologies"===LIBRARY.topics[element.getAttribute("data-topic")].name?$("currentFilter_GettingStartedList").addClassName("hidden"):$("currentFilter_GettingStartedList").removeClassName("hidden")},collapseDescriptionBox:function(){$("contentBox_toggle").addClassName("closed"),$("currentFilter_Description").addClassName("hidden"),$("currentFilter_Callout").addClassName("hidden")},openDescriptionBox:function(){$("contentBox_toggle").removeClassName("closed"),$("currentFilter_Description").removeClassName("hidden"),$("currentFilter_Callout").removeClassName("hidden")},gettingStartedSorter:function(a,b){return a.id<b.id?1:-1},buildGettingStartedList:function(){var i,anchor,gettingStartedHTML="";if(Navigation.gettingStartedList=Navigation.gettingStartedList.sort(Navigation.gettingStartedSorter),Doc.doesShowGettingStarted&&Navigation.gettingStartedList.length>0){for(gettingStartedHTML+='<div id="gettingStartedHead">Getting Started</div><ul id="gettingStarted">',i=0;i<Navigation.gettingStartedList.length;i++)anchor='<a id="gettingStarted_'+Navigation.gettingStartedList[i].id+'" href="'+Navigation.gettingStartedList[i].href+'">',gettingStartedHTML+='<li class="row">'+anchor+Navigation.gettingStartedList[i].title+'<div class="linkarrow"></div></a></li>';gettingStartedHTML+="</ul>",$("currentFilter_GettingStartedList").innerHTML=gettingStartedHTML}else $("currentFilter_GettingStartedList").innerHTML=""},init:function(){var i,entry,isNotFirstParent,closed,isParentSelected,isTopicSelected,displayName,isFrameworks,navigationHTML="<li id='showAllDocs' class='title' onclick='Doc.showAll()'>"+Book.title+"</li>",currentSelection="showAllDocs";for(i=0;i<LIBRARY.topics.length;i++){for(closed="closed"===Cookie.get(Book.title+"_navigation_topic_"+i)?"closed":"",0===Doc.navigationFilter.length&&Doc.navigationTopic===LIBRARY.topics[i].name.compareable()?(currentSelection="navigation_topic_"+i,isTopicSelected=!0):isTopicSelected=!1,navigationHTML+="<li id='navigation_topic_"+i+"' class='navigationTopics title' onclick='Navigation.toggleSection(this)' data-topic='"+i+"'><span class='disclosure "+closed+"'></span><a onclick='Doc.filterTopic(event);return false' href='#section="+escape(LIBRARY.topics[i].name)+"'>"+LIBRARY.topics[i].name+"</a></li><ul id='Topic_"+LIBRARY.topics[i].name.replace(/ /g,"_")+"' class='navigation_Topic "+closed+"'>",isNotFirstParent=!1,entry=0;entry<LIBRARY.topics[i].contents.length;entry++){displayName=LIBRARY.topics[i].contents[entry].name;var entryKey=LIBRARY.topics[i].contents[entry].key;!displayName||"Topics"===LIBRARY.topics[i].name&&LIBRARY.topics[i].contents[entry].isNotDisplayedInNavigation||(isFrameworks="Technologies"===LIBRARY.topics[i].name,isFrameworks&&(closed="closed"===Cookie.get(Book.title+"_navigation_"+entryKey)?"closed":""),void 0===LIBRARY.topics[i].contents[entry].parent?(displayName.compareable()===Doc.navigationFilter[0]&&Doc.navigationTopic===LIBRARY.topics[i].name.compareable()?(isParentSelected=!0,currentSelection="navigation_"+entryKey):isParentSelected=!1,navigationHTML+=isNotFirstParent&&isFrameworks?"</ul>":"",isNotFirstParent=!0,navigationHTML+="<li id='navigation_"+entryKey+"' class='group' data-topic='"+i+"'",navigationHTML+=isFrameworks?"onclick='Navigation.toggleSection(this)'><span class='disclosure "+closed+"'></span><a onclick='Doc.filterTopic(event);return false' href='#section=Frameworks&topic="+escape(displayName)+"'>"+displayName+"</a>":"'><a onclick='Doc.filterTopic(event);return false' href='#section="+escape(LIBRARY.topics[i].name)+"&topic="+escape(displayName)+"'>"+displayName+"</a>",navigationHTML+=isFrameworks?"</li><ul id='Topic_"+entry+"' class='navigation_SubTopic "+closed+"'>":"</li>",isTopicSelected&&(Doc.navigationFilter.push(displayName.compareable()),isParentSelected=!0)):isFrameworks&&(displayName.compareable()===Doc.navigationFilter[0]&&Doc.navigationTopic===LIBRARY.topics[i].name.compareable()&&(currentSelection="navigation_subtopic_"+entryKey),isParentSelected&&Doc.navigationFilter.push(displayName.compareable()),navigationHTML+="<li id='navigation_subtopic_"+entryKey+"' onclick='Doc.filterTopic(event)' data-topic='"+i+"'>"+displayName+"</li>"))}navigationHTML+="</ul></ul>"}$("navigationBox").innerHTML=navigationHTML.replace(/\<ul id=\'Topic_[0-9]+\' class=\'navigation_SubTopic \'><\/ul>/g,""),$("legacyContentCallOut")&&$("legacyContentCallOut").hasClassName("hidden")&&$("legacyContentCallOut").removeClassName("hidden"),Navigation.selectItem($(currentSelection))}},Details={document:{},getFor:function(id,callBack,isGettingStarted){var success=function(transport){return Details.document[id]=transport.responseText.evalJSON(),callBack(id,isGettingStarted)};return void 0!==Details.document[id]?callBack(id,isGettingStarted):new Ajax.Request("doc_details/"+id+".json",{method:"get",onSuccess:success})},openIfNeeded:function(id){"true"===Cookie.get(Book.title+id)&&Details.getFor(id,Details._displayFor)},openPreviouslyOpenOnes:function(){for(var id,doc=0;doc<LIBRARY.documents.length;doc++)id=LIBRARY.documents[doc][LIBRARY.columns.id],"true"===Cookie.get(Book.title+id)&&Details.getFor(id,Details._displayFor)},toggle:function(id){$("docID_"+id+"_details").hasClassName("open")?($("docID_"+id+"_details").removeClassName("open"),$("docID_"+id).down(".detailDisclosure").removeClassName("open"),Cookie.expire(Book.title+id)):Details.getFor(id,Details._displayFor)},_displayFor:function(id){if($("docID_"+id+"_details")){$("docID_"+id+"_details").innerHTML="<div>"+Details.document[id].shortOverview+'</div><div class="docRevisionSummary">'+Details.document[id].revisionSummary+"</div>",$("docID_"+id+"_details").addClassName("open"),$("docID_"+id).down(".detailDisclosure").addClassName("open");var expiry=new Date;expiry.setTime(expiry.getTime()+1728e5),Cookie.set({cName:Book.title+id,cValue:"true",cExpiry:expiry.toGMTString()})}else setTimeout("Details._displayFor("+id+")",200)}},Doc={filters:[],navigationFilter:[],navigationTopic:null,doesShowGettingStarted:!0,columnID:{resourcetypes:1,topics:2,tools:2,"tools&amp;languages":2,technologies:3,libraries:3,platforms:8},showAll:function(){Doc.navigationTopic=null,Navigation.selectItem($("showAllDocs")),Table.generate(),location.hash="",Doc.lastHash=location.hash},initFiltering:function(){var defaultFilter=!1,defaultSection=!1,defaultTopic=!1;return Prototype.Query&&(defaultFilter=Prototype.HashQuery.get("filter")||Prototype.Query.get("filter")||$("documentFilter").value||"",defaultSection=Prototype.HashQuery.get("section")||Prototype.Query.get("section"),defaultTopic=Prototype.HashQuery.get("topic")||Prototype.Query.get("topic"),defaultFilter+=Prototype.HashQuery.get("subtopic")||Prototype.Query.get("subtopic")||""),defaultFilter?($("documentFilter").value=defaultFilter,Doc.filter(defaultFilter)):Doc.filter($F("documentFilter").escapeRegExp()),defaultSection&&defaultTopic?(Doc.navigationTopic=defaultSection.compareable(),Doc.navigationFilter=[defaultTopic.compareable()]):defaultSection&&(Doc.navigationTopic=defaultSection.compareable()),$("documentFilter").observe("keydown",Doc.stopDelete),$("documentFilter").observe("keyup",Doc.timedFilter),$("documentFilter").observe("click",Doc.timedFilter),$("documentFilter")},lastHash:location.hash,checkForHashChange:function(){if(Doc.lastHash!==location.hash){Doc.lastHash=location.hash,Prototype.HashQuery=new Querystring(location.hash.replace(/#/,""));var defaultSection=Prototype.HashQuery.get("section"),defaultTopic=Prototype.HashQuery.get("topic");defaultSection&&(Doc.navigationTopic=defaultSection.compareable(),Doc.navigationFilter=defaultTopic?[defaultTopic.compareable()]:[],Navigation.init(),Table.generate())}},stopDelete:function(event){8===event.keyCode&&Prototype.Browser.Xcode&&Prototype.Browser.XcodeVersion<1610&&!Prototype.Borwser.Xcode4OrNewer&&(event.stop(),$("documentFilter").value="")},previousFilterListValue:"",lastCheck:null,timedFilter:function(event){$("documentFilter").stopObserving("keyup",Doc.timedFilter),$("documentFilter").stopObserving("click",Doc.timedFilter),void 0!==event&&27===event.keyCode&&($("documentFilter").value="");var lastCheck=Doc.lastCheck?Doc.lastCheck:new Date,now=new Date,currentFilterText=$F("documentFilter");now-lastCheck>=300&&Table.isNotGenerating&&Doc.previousFilterListValue===currentFilterText?(Doc.filter(currentFilterText),Doc.lastCheck=null,Table.generate(),$("documentFilter").observe("keyup",Doc.timedFilter),$("documentFilter").observe("click",Doc.timedFilter)):(Doc.lastCheck=now,Doc.previousFilterListValue=currentFilterText,setTimeout(Doc.timedFilter,currentFilterText.length>3?300:500))},FilterThisTopic:function(element){Doc.navigationFilter="textContent"in element?[element.textContent.escapeHTML().compareable()]:[element.innerText.escapeHTML().compareable()],Doc.navigationTopic=LIBRARY.topics[element.getAttribute("data-topic")].name.compareable()},FilterTheseTopics:function(element){var i,thisElement,topicElements=element.next().childElements();for(i=0;i<topicElements.length;i++)thisElement=topicElements[i],thisElement.next()&&thisElement.next().hasClassName("navigation_SubTopic")?Doc.FilterTheseTopics(thisElement):Doc.navigationFilter.push("textContent"in thisElement?thisElement.textContent.escapeHTML().compareable():thisElement.innerText.escapeHTML().compareable());Doc.navigationTopic=LIBRARY.topics[topicElements[0].getAttribute("data-topic")].name.compareable()},filterTopic:function(event){var element=Event.findElement(event,"li"),navigationLocation=element.id.split("_")[1],elementText=encodeURIComponent("textContent"in element?element.textContent.escapeHTML():element.innerText.escapeHTML());switch(Doc.navigationFilter=[],navigationLocation){case"topic":event.stop(),Doc.FilterTheseTopics(element);break;case"subtopic":Doc.FilterThisTopic(element);break;default:element.next()&&element.next().hasClassName("navigation_SubTopic")?Doc.FilterTheseTopics(element):Doc.FilterThisTopic(element)}return Navigation.selectItem(element),location.hash=encodeURIComponent(LIBRARY.topics[element.getAttribute("data-topic")].name)===elementText?"section="+encodeURIComponent(LIBRARY.topics[element.getAttribute("data-topic")].name):"section="+encodeURIComponent(LIBRARY.topics[element.getAttribute("data-topic")].name)+"&topic="+elementText,Doc.lastHash=location.hash,Table.generate()},filter:function(filterList){return filterList!==Doc.lastFilteredList?(Doc.lastFilteredList=filterList,Doc.filters=[],filterList&&(filterList=filterList.replace(/\"|\'|&\m+;/gi," ").replace(/^\s+|\s+$/g,"").escapeRegExp(),filterList.length>0&&(Doc.filters=filterList.toLowerCase().split(/\s+/))),Doc.filters):void 0},addQuotedStringsToFiltersFrom:function(filterList){var newFilter,firstQuote=filterList.indexOf('"',0),secondQuote=filterList.indexOf('"',firstQuote);return secondQuote>0&&(newFilter=filterList.slice(firstQuote,secondQuote),Doc.filters.push(newFilter.replace('"',"").replace('"',"")),filterList.replace('"'+newFilter+'"',""),filterList.indexOf('"',0)>=0)?Doc.addQuotedFilterStrings(filterList):filterList},isNotFilteredOut:function(document,id){var i,didFindThisTerm,docString,currentSearch,highlightedString,thisRange,didFindAllTerms=!1,isInSelectedTopics=!1,rangesOfMatches=[];if(Doc.navigationTopic){for(i=0;i<Doc.navigationFilter.length;i++){var colValue=document[Doc.columnID[Doc.navigationTopic]].compareable(),doesPlatformContainFilter=!1;if("platforms"===Doc.navigationTopic&&"platforms"!=colValue)for(var splitPlatforms=colValue.split("|"),arrayLength=splitPlatforms.length,i=0;arrayLength>i;i++)splitPlatforms[i]===Doc.navigationFilter[i]&&(doesPlatformContainFilter=!0);colValue!==Doc.navigationFilter[i]&&!doesPlatformContainFilter||"platforms"==colValue||(isInSelectedTopics=!0,"Getting Started"===document[Doc.columnID.resourecetypes]&&Navigation.gettingStartedList.push({title:document[0],id:id}))}if(isInSelectedTopics=isInSelectedTopics?isInSelectedTopics:0===Doc.navigationFilter.length&&""!==document[Doc.columnID[Doc.navigationTopic]],!isInSelectedTopics)return!1}if(Doc.filters.length>0){for(docString=document.join("{{}}").unescapeHTML(),i=0;i<Doc.filters.length;i++){for(currentSearch=new RegExp("("+Doc.filters[i]+")","gi"),didFindThisTerm=!1;currentSearch.test(docString);)didFindThisTerm=!0,rangesOfMatches.push([currentSearch.lastIndex-RegExp.lastParen.length,currentSearch.lastIndex]);if(!didFindThisTerm)return!1;didFindAllTerms=!0}for(rangesOfMatches=Doc.mergeRanges(rangesOfMatches),highlightedString=docString.substring(0,rangesOfMatches[0][0]),i=0;i<rangesOfMatches.length;i++)thisRange=rangesOfMatches[i],highlightedString+=docString.substring(thisRange[0],thisRange[1]).highlight(),highlightedString+=i===rangesOfMatches.length-1?docString.substring(thisRange[1]):docString.substring(thisRange[1],rangesOfMatches[i+1][0]);document=highlightedString.split("{{}}")}else didFindAllTerms=!0;return didFindAllTerms?document:!1},compareRanges:function(a,b){var comparison;return comparison=a[0]-b[0],0===comparison&&(comparison=a[1]-b[1]),comparison},mergeRanges:function(ranges){var sortedRanges,mergedRanges,currentRange,newRange;mergedRanges=[],sortedRanges=ranges.sort(Doc.compareRanges);for(var i=0;i<sortedRanges.length;i++)void 0===currentRange?currentRange=sortedRanges[i]:(newRange=sortedRanges[i],newRange[0]<=currentRange[1]?newRange[1]>currentRange[1]&&(currentRange[1]=newRange[1]):(mergedRanges.push(currentRange),currentRange=newRange));return null!==currentRange&&mergedRanges.push(currentRange),mergedRanges}},Table={isNotGenerating:!1,sortedOnColumn:/name|type|topic|technology|framework|date/i.match(Cookie.get(Book.title+"_sortedOnColumn"))?Cookie.get(Book.title+"_sortedOnColumn"):"date",sortOrder:null!==Cookie.get(Book.title+"_sortOrder")?Cookie.get(Book.title+"_sortOrder"):-1,topic:{},load:function(){{var updateLibrary=function(transport){LIBRARY=transport.responseText.evalJSON(),Doc.initFiltering(),NavigationPage.isWithoutSidebar||Navigation.init(),Table.initTopics(),Table.sortColumn()};new Ajax.Request("library.json",{method:"get",onSuccess:updateLibrary})}},initTopics:function(){var i;for(i=0;i<LIBRARY.topics.length;i++){for(var topic={},contents={},x=0;x<LIBRARY.topics[i].contents.length;x++){var content=LIBRARY.topics[i].contents[x];contents[content.key]=content}topic.contents=contents,Table.topic[LIBRARY.topics[i].name]=topic}},sortColumn:function(event){var newSortColumn,oldSortOrder=Table.sortOrder;return"undefined"!=typeof event&&(newSortColumn=event.findElement("th").id,$(Table.sortedOnColumn)&&$(Table.sortedOnColumn).removeClassName("sortedOn"+oldSortOrder),Table.sortedOnColumn===newSortColumn?Table.sortOrder=0:(Table.sortOrder="date"===newSortColumn?-1:1,Table.sortedOnColumn=newSortColumn,Cookie.set({cName:Book.title+"_sortedOnColumn",cValue:Table.sortedOnColumn,cExpiry:COOKIE_EXPIRE_DATE}))),Table.sortOrder>0?LIBRARY.documents.sort(Table.compareRows):Table.sortOrder<0?LIBRARY.documents.sort(Table.compareRows).reverse():(LIBRARY.documents.reverse(),Table.sortOrder=-1*oldSortOrder),Cookie.set({cName:Book.title+"_sortOrder",cValue:Table.sortOrder,cPath:"/",cExpiry:COOKIE_EXPIRE_DATE}),Table.generate()},bookshelfAppLocation:function(){var bookshelfAppLocation="../#";return"file:"==window.location.protocol&&(bookshelfAppLocation="../index.html#"),Prototype.Browser.Xcode4OrNewer&&(bookshelfAppLocation="../"),bookshelfAppLocation},generate:function(){Table.isNotGenerating=!1;var doc,docID,thisDoc,column,thisDocText,tableHTML=STRINGS.tableHeadRowOpen+STRINGS.nameTableHead+STRINGS.platformTableHead+STRINGS.typeTableHead+(NavigationPage.doesHaveTopics?STRINGS.topicTableHead:"")+(NavigationPage.doesHaveFrameworks?STRINGS.frameworkTableHead:"")+STRINGS.dateTableHead+STRINGS.tableHeadRowClose,OrginalTableHeader=tableHTML;if(!NavigationPage.doesHaveTopics&&"type"===Table.sortedOnColumn||!NavigationPage.doesHaveFrameworks&&("technology"===Table.sortedOnColumn||"framework"===Table.sortedOnColumn))return Table.sortOrder=-1,Table.sortedOnColumn="date",Table.sortColumn();Navigation.gettingStartedList=[];Table.bookshelfAppLocation();for(doc=0;doc<LIBRARY.documents.length;doc++)if(thisDoc=LIBRARY.documents[doc],docID=thisDoc[LIBRARY.columns.id],thisDocText=Doc.isNotFilteredOut([thisDoc[LIBRARY.columns.name],Table.topic["Resource Types"].contents[thisDoc[LIBRARY.columns.type]].name,NavigationPage.doesHaveTopics?Table.topic.Topics.contents[thisDoc[LIBRARY.columns.topic]].name:"",NavigationPage.doesHaveFrameworks?Table.topic[NavigationPage.frameworksName].contents[thisDoc[LIBRARY.columns.framework]].name:"",thisDoc[LIBRARY.columns.displayDate],LIBRARY.updateSize[thisDoc[LIBRARY.columns.updateSize]],LIBRARY.release[thisDoc[LIBRARY.columns.release]]?LIBRARY.release[thisDoc[LIBRARY.columns.release]]:"",NavigationPage.doesHaveTopics?Table.topic.Topics.contents[thisDoc[LIBRARY.columns.subtopic]].name:"",thisDoc[LIBRARY.columns.platform]],docID)){Details.openIfNeeded(docID);var docURL=thisDoc[LIBRARY.columns.url];tableHTML+='<tr id="docID_'+docID+'"><td class="docTitleAndDescription"><div class="detailDisclosure" onclick="Details.toggle(\''+docID+'\')">&nbsp;</div><div class="docTitle"><a id="docID_'+docID+'_Link" href="'+docURL+'">'+thisDocText[0]+'</a></div><div id="docID_'+docID+'_details" class="docDetails"></div></td>',tableHTML+='<td style="display:none;">'+thisDocText[8]+"</td>",tableHTML+='<td class="resourceTypes">'+thisDocText[1]+"</td>",tableHTML+=NavigationPage.doesHaveTopics?'<td class="topics">'+thisDocText[2]+'<div class="subtopics">'+thisDocText[7]+"</div></td>":"",NavigationPage.doesHaveFrameworks&&(tableHTML+='<td class="technologies">'+thisDocText[3]+"</td>"),tableHTML+='<td class="revisionDateandSize"><div class="docRevisionDate">'+thisDocText[4]+'</div><div class="docRevisionSize">'+thisDocText[5]+'</div><div class="docDependencyName">'+thisDocText[6]+"</div></td></tr>"}if(Navigation.buildGettingStartedList(),tableHTML===OrginalTableHeader)return $("documentsTable_Wrapper").innerHTML=tableHTML+STRINGS.noDocumentsFound,Table.isNotGenerating=!0,$("docsFound").innerHTML="0 of "+LIBRARY.documents.length;$("documentsTable_Wrapper").innerHTML=tableHTML+"</table>",$(Table.sortedOnColumn)&&$(Table.sortedOnColumn).addClassName("sortedOn"+Table.sortOrder);for(column in LIBRARY.columns)$(column)&&$(column).observe("click",Table.sortColumn);return Table.isNotGenerating=!0,Details.openPreviouslyOpenOnes(),$("docsFound").innerHTML=$("documentsTable").rows.length-1+" of "+LIBRARY.documents.length},findById:function(source,id){return source.filter(function(obj){return+obj.key===+id})[0]},compareRows:function(a,b){var itemA,itemB,sortedOnColumn=LIBRARY.columns[Table.sortedOnColumn];switch(Table.sortedOnColumn){case"name":itemA=a[sortedOnColumn].toLowerCase(),itemB=b[sortedOnColumn].toLowerCase();break;case"type":itemA=Table.findById(LIBRARY.topics[0].contents,a[sortedOnColumn]).sortOrder,itemB=Table.findById(LIBRARY.topics[0].contents,b[sortedOnColumn]).sortOrder;break;default:itemA=a[sortedOnColumn],itemB=b[sortedOnColumn]}if(itemB>itemA)return-1;if(itemA>itemB)return 1;switch(Table.sortedOnColumn){case"date":return a[LIBRARY.columns.sortOrder]<b[LIBRARY.columns.sortOrder]?-1:a[LIBRARY.columns.sortOrder]>b[LIBRARY.columns.sortOrder]?1:a[LIBRARY.columns.updateSize]<b[LIBRARY.columns.updateSize]?1:a[LIBRARY.columns.updateSize]>b[LIBRARY.columns.updateSize]?-1:0;case"topic":return a[LIBRARY.columns.subtopic]<b[LIBRARY.columns.subtopic]?1:a[LIBRARY.columns.subtopic]>b[LIBRARY.columns.subtopic]?-1:0;default:return 0}return 0}},pageInit=function(){Prototype.Browser.Xcode?$("allContent").addClassName("isInXcode"):$("allContent").focus(),Table.load(),$("documentFilter").setAttribute("placeholder","Filter document list"),window.addEventListener("hashchange",Doc.checkForHashChange)};document.observe("dom:loaded",pageInit);