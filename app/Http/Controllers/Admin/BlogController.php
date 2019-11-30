<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blog = Blog::latest()->paginate(10);
        return response([
            'data' => $blog,
        ]);
    }

    /**
     * Display a single of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $blog = Blog::find($id);
        $blog['feature_image'] = \Storage::url($blog->feature_image);
        return response([
            'data' => $blog,
            'message' => 'success',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = $request->all();
        unset($data['category']);
        $data['slug'] = Blog::getSlug($data['title']);
        $data['user_id'] = auth()->user()->id;
        $data['blog_category_id'] = $request->category;

        $data['feature_image'] = base64ImageUpload('feature-image', $request->feature_image);
        $blog = Blog::create($data);
        return response([
            'message' => "success",
            'data' => $blog,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $blog = Blog::find($id);

        $data = $request->all();
        unset($data['category']);
        $data['slug'] = Blog::getSlug($data['title']);
        $data['user_id'] = auth()->user()->id;
        $data['blog_category_id'] = $request->category;
        if (!empty($request->feature_image)) {
            $data['feature_image'] = base64ImageUpload('feature-image', $request->feature_image);
            \Storage::delete($blog->feature_image);
        }

        $blog->update($data);
        return response([
            'message' => "success",
            'data' => $blog,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        \Storage::delete($blog->feature_image);
        $blog->delete();
        return response([
            'message' => 'success',
        ]);
    }

    /**
     * get total count of blog
     *
     * @return \Illuminate\Http\Response
     */
    public function count()
    {
        $count = Blog::count();
        return response($count);
    }

    /**
     * get total todayPost of blog
     *
     * @return \Illuminate\Http\Response
     */
    public function todayPost()
    {
        $count = Blog::whereDate('created_at', Carbon::today())->count();
        return response($count);
    }
}
